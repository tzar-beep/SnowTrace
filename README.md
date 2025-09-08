# SnowTrace 🏔️

**AI-Guided Avalanche Rescue Routes in Seconds**

SnowTrace is a full-stack web application designed to accelerate avalanche search and rescue operations. It uses an AI agent to analyze mission-critical data—such as victim locations, weather conditions, and terrain—to generate and visualize optimal rescue routes on an interactive map.

This proof-of-concept provides a mission control dashboard for placing rescue assets, simulating team movements, and running AI-powered probability analysis to help teams make faster, life-saving decisions.

![SnowTrace](https://placehold.co/800x450/172554/90B4BE?text=SnowTrace)



---

## ✨ Key Features

- **AI Route Generation**: Utilizes Google's Gemini AI to generate optimal rescue routes based on real-time inputs.
- **Interactive Mission Map**: A dynamic Google Maps interface to place the rescue base, victims, and avalanche zones.
- **Dynamic Strategy Planning**: Choose between a multi-team approach or a single-team Traveling Salesperson Problem (TSP) optimization.
- **Victim Probability Analysis**: Leverages AI to analyze conditions and suggest high-probability search areas.
- **Real-Time Simulation**: Animates rescue teams moving along the generated routes for a clear operational picture.
- **Responsive Design**: A clean, modern interface built with ShadCN UI and Tailwind CSS that works on desktop and mobile.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Mapping**: [Google Maps Platform](https://developers.google.com/maps) (Maps JavaScript API, Geocoding API)
- **AI & Backend**: [Google AI](https://ai.google/) (Gemini Pro via [Firebase Genkit](https://firebase.google.com/docs/genkit))
- **Deployment**: [Vercel](https://vercel.com/) / [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/tzar-beep/SnowTrace
cd your-repository-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a file named `.env` in the root of your project and add the following environment variables. You will need to obtain these API keys from Google Cloud Platform.

```env
# Your Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_GOOGLE_MAPS_API_KEY"

# Your Google AI (Gemini) API Key
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

> **Note**: For the Google Maps API Key, you need to enable the **Maps JavaScript API** and **Geometry Library** in your Google Cloud project.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

---
