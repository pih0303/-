import express from "express";
import { createServer as createViteServer } from "vite";
import { OAuth2Client } from "google-auth-library";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "db.json");

// Initialize DB if not exists
if (!fs.existsSync(DB_PATH)) {
  const initialData = {
    posts: [
      { 
        id: "1",
        date: "2026.02", 
        title: "브릿지 미션 선교사 리트릿", 
        author: "박익휘 목사",
        image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfMyAg/MDAxNzcwNDMxNzg0MzQz.cYu4JBca8cdTs6xCGmwIL2O5H-ZtXM8uETQty5YuNcYg.TOuuzAxvelj4UnqzksIc35PMaTIDKkXEXMQZKxpscVwg.JPEG/IMG%A3%DF7762.JPG?type=s3",
        link: "https://blog.naver.com/bridgeinterchurch/224174974835",
        content: "김포에서 이주민 선교와 목회를 섬기는 4가정이 함께 속초–양양으로 가족 리트릿을 다녀왔다. 같은 비전, 한 마음으로 모이니 특별한 계획 없어도 서로 나눌것이 많다!\n\n1박으로 짧게 다녀왔는데 새벽까지 이주민의 삶, 타문화 선교로의 부르심, 다문화 목회 등 여럿 포럼의 주제가 올라온다! 서로의 존재만으로도 깊은 배움이 있다!\n\n하나님께서 함께하시는 이주민 사역은 결코 외로운 길이 아님을 확인한다! 함께 걷는 동역자들이 있음에 감사하며, 앞으로의 사역을 위해 기도를 부탁드린다."
      },
      { 
        id: "2",
        date: "2026.02", 
        title: "선교적교회운동의 태동과 발전", 
        author: "박익휘 목사",
        image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfNSAg/MDAxNzcwNDMxNTg5MTUz.yo3mqCxeCKavoFvHz5Igedfc02fcRXqr9cMKGLrRLzsg.PZDv7_GEd91r-PYeue62k1snC-7hytjlisliUPWS2R8g.PNG/IMG%A3%DF7834.PNG?type=s3",
        link: "https://blog.naver.com/bridgeinterchurch/224174972119",
        content: "서울시민교회 디모데 청년부 특강 자료입니다. 선교적 교회 운동의 역사적 배경과 현대적 의미를 탐구하며, 교회가 어떻게 세상 속에서 하나님의 선교에 참여할 수 있는지에 대해 나누었습니다.\n\n선교적 교회(Missional Church)란 단순히 선교를 많이 하는 교회가 아니라, 교회의 본질 자체가 선교적임을 깨닫고 삶의 모든 영역에서 하나님의 통치를 드러내는 공동체입니다. 청년들이 각자의 삶의 현장에서 선교사적 삶을 살아내기를 도전하는 시간이었습니다."
      },
      { 
        id: "3",
        date: "2025.12", 
        title: "추수감사절을 지나며", 
        author: "브릿지 미션",
        image: "https://picsum.photos/seed/thanksgiving/800/600",
        link: "https://blog.naver.com/bridgeinterchurch/224094399218",
        content: "지나보니 모든것이 은혜이고 감사이지만, 그 과정은 분명 많은 것이 힘들었고 불안했다. 무엇보다 부모는 개척을 결정했지만, 태어나 자기 세상의 전부나 다름없던 교회와 갑자기 단절된 큰 아이는 꽤나 큰 심리적 충격을 겪었던 것 같다.\n\n어제는 추수감사절을 맞아 우리에게 행하신 하나님께 감사하고, 함께 포트럭 파티를 했다. 각자가 음식을 싸와서 먹었는데, 부활절때 보다 더 풍성한 음식 리스트에 감사와 감동!!\n\n이주민 친구들과 함께 나누는 식탁 교제 속에서 하나님 나라의 풍성함을 맛봅니다. 우리의 작은 나눔이 그들에게 따뜻한 위로가 되길 소망합니다."
      }
    ],
    people: [
      {
        id: "park",
        name: "박익휘 (Park Ik-hui)",
        role: "대표 선교사",
        email: "ek@bridgeinternational.church",
        description: "이주민들에게 “사람이 꽃보다 아름답다”고 말해주고 싶습니다. 고된 노동현장을 살다 방문한 이들에게 낯설고 외로운 타향이 아니라 따뜻하고 소망이 있는 또다른 고향으로 기억되면 좋겠습니다. 중국과 미국 그리고 한국에서 여러 이주민들과 국제시민들을 만나 함께하였고 지난 2021년 귀국하여 김포에 자리 잡았습니다. 영어권 외국인 및 태국 중국등 현지 지도자들을 훈련하고 종종 타문화이해를 위한 교육 및 강의도 개발합니다.",
        details: ["브릿지 이음 국제교회 대표목사", "브릿지 미션 대표", "고신대학교 신학전공", "Biblical (Missio) Theological Seminary M.Div", "Biola University Doctor of Intercultural Studies (Candidate)"],
        social: { facebook: "https://www.facebook.com/ekparkbiblical/", scholar: "https://scholar.google.com/citations?user=ZMvOd9cAAAAJ&hl=ko" },
        image: "https://picsum.photos/seed/park/600/600"
      },
      {
        id: "devon",
        name: "데븐 (Devon Grobler)",
        role: "국내 이주민 선교사",
        description: "남아프리카 침례신학대학교(B.Th.)에서 신학을 공부하며 하나님의 은혜로 훈련을 받았고, 이후 아내와 함께 한국으로 와 이주민과 다문화 공동체를 섬기고 있습니다. 현재 저는 브릿지 미션과 브릿지 이음 국제교회를 통해 한국인과 외국인이 함께 예배하고, 그리스도 안에서 한 가족으로 성장하는 다문화 공동체를 세우는 사역에 헌신하고 있습니다.",
        details: ["남아프리카 침례신학대학교 (B.Th.)", "브릿지 이음 국제교회 협력 사역", "다문화 공동체 세우기 헌신"],
        image: "https://picsum.photos/seed/devon/600/600"
      },
      {
        id: "somwang",
        name: "소정 & 소망 (Somwang & Kim So-jung)",
        role: "태국 파송 선교사",
        description: "태국 현지 콘캔 출신남편과 한국인 아내의 만남으로 이루어진 아름다운 선교에 헌신된 가정입니다. 브릿지 미션과 브릿지 이음교회의 파송을 받아 태국 북동부(이싼)지역의 컨깬에서 복음을 전하고 있으며 미디어 사역과 예배 사역을 섬기고 있습니다.",
        details: ["태국 북동부(이싼) 컨깬 지역 사역", "미디어 사역 (단편영화, 뮤직비디오 제작)", "예배 및 음악 교육 사역"],
        image: "https://picsum.photos/seed/somwang/600/600"
      },
      {
        id: "kim",
        name: "김현주 (Kim Hyun-joo)",
        role: "이주민 목회 선교사",
        description: "김현주(공은정) 목사는 “하나님의 사람으로 살아내고, 사람을 살려내라”는 말씀 앞에서 익숙하고 안정적인 길을 내려놓고 새로운 부르심에 응답했습니다. 현재 김포 인천 지역에서 태국·라오스 이주민 공동체를 섬기며 다문화 교회 공동체를 세우는 사역에 헌신하고 있습니다.",
        details: ["김포/인천 지역 태국·라오스 공동체 사역", "다문화 교회 공동체 세우기 헌신", "삶으로 살아내는 신앙 강조"],
        image: "https://picsum.photos/seed/kim/600/600"
      }
    ]
  };
  fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
}

const app = express();
const PORT = 3000;

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "bridge-mission-secret"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: true,
    sameSite: "none",
  })
);

// Helper to read/write DB
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data: any) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Admin Middleware
const isAdmin = (req: any, res: any, next: any) => {
  if (req.session?.user?.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

// Auth Routes
app.post("/api/auth/login", (req, res) => {
  const { id, password } = req.body;
  
  // Use environment variables if set, otherwise use defaults
  const adminId = (process.env.ADMIN_ID || "admin").trim();
  const adminPassword = (process.env.ADMIN_PASSWORD || "bridge1234").trim();

  console.log(`Login attempt for ID: ${id}`);

  if (id && password && id.trim() === adminId && password.trim() === adminPassword) {
    req.session!.user = {
      email: "admin@bridge.mission",
      name: "Administrator",
      picture: "",
      isAdmin: true,
    };
    res.json({ user: req.session!.user });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/api/auth/url", (req, res) => {
  const redirectUri = `${process.env.APP_URL}/auth/callback`;
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
    redirect_uri: redirectUri,
  });
  res.json({ url });
});

app.get("/auth/callback", async (req, res) => {
  const code = req.query.code as string;
  const redirectUri = `${process.env.APP_URL}/auth/callback`;

  try {
    const { tokens } = await client.getToken({
      code,
      redirect_uri: redirectUri,
    });
    
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    if (payload) {
      const isAdminUser = payload.email === process.env.ADMIN_EMAIL;
      req.session!.user = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        isAdmin: isAdminUser,
      };
    }

    res.send(`
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
              window.close();
            } else {
              window.location.href = '/';
            }
          </script>
          <p>로그인 성공! 이 창은 자동으로 닫힙니다.</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).send("Authentication failed");
  }
});

app.get("/api/auth/me", (req, res) => {
  res.json({ user: req.session?.user || null });
});

app.post("/api/auth/logout", (req, res) => {
  req.session = null;
  res.json({ success: true });
});

// Data Routes
app.get("/api/posts", (req, res) => {
  const db = readDB();
  res.json(db.posts);
});

app.post("/api/posts", isAdmin, (req, res) => {
  const db = readDB();
  const newPost = { ...req.body, id: Date.now().toString() };
  db.posts.unshift(newPost);
  writeDB(db);
  res.json(newPost);
});

app.put("/api/posts/:id", isAdmin, (req, res) => {
  const db = readDB();
  const index = db.posts.findIndex((p: any) => p.id === req.params.id);
  if (index !== -1) {
    db.posts[index] = { ...db.posts[index], ...req.body };
    writeDB(db);
    res.json(db.posts[index]);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/api/posts/:id", isAdmin, (req, res) => {
  const db = readDB();
  db.posts = db.posts.filter((p: any) => p.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
});

app.get("/api/people", (req, res) => {
  const db = readDB();
  res.json(db.people);
});

app.put("/api/people/:id", isAdmin, (req, res) => {
  const db = readDB();
  const index = db.people.findIndex((p: any) => p.id === req.params.id);
  if (index !== -1) {
    db.people[index] = { ...db.people[index], ...req.body };
    writeDB(db);
    res.json(db.people[index]);
  } else {
    res.status(404).json({ error: "Person not found" });
  }
});

// Vite middleware for development
if (process.env.NODE_ENV !== "production") {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.join(__dirname, "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
