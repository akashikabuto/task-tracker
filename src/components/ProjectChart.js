import { VictoryPie } from "victory";

export default function ProjectChart() {
  return (
    <VictoryPie data={[
      { x: "Contributors", y: 25 },
      { x: "Issues", y: 40 },
      { x: "Tasks", y: 15 }
    ]}
      animate={{
        duration: 2000
      }}
      colorScale={["#0065ff", "rgb(119, 99, 99)", "#16243a"]}
      width={200}
      height={200}
      style={{
        labels: {
          fontSize: 8
        }
      }}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
    />
  );
}
