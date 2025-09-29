import { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";

export default function App() {
  const [showResults, setShowResults] = useState(false);

  // Hard-coded images and graphs
  const mineImage = "/images/open_pit_mine.jpg";
  const heatmapImage = "/images/heatmap.png";
  const graphData = {
    labels: ["Area 1", "Area 2", "Area 3", "Area 4", "Area 5"],
    datasets: [
      {
        label: "Danger Level",
        data: [0.7, 0.3, 0.9, 0.6, 0.8],
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Open Pit Mine Danger Predictor</h1>

      {!showResults && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowResults(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Predict
        </motion.button>
      )}

      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 w-full max-w-4xl flex flex-col items-center gap-8"
        >
          <h2 className="text-xl font-semibold">Mine Image</h2>
          <img src={mineImage} alt="Mine" className="rounded shadow-md" />

          <h2 className="text-xl font-semibold">Heatmap Overlay</h2>
          <img src={heatmapImage} alt="Heatmap" className="rounded shadow-md" />

          <h2 className="text-xl font-semibold">Danger Level Graph</h2>
          <div className="w-full">
            <Line data={graphData} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
