import { Pie } from "react-chartjs-2";

const PieChart: React.FC<{
  chartData: {
    categoryId: number;
    categoryTitle: string;
    totalPercentUsage: number;
    color: string;
  }[];
}> = (props) => {
  const isEmpty = props.chartData.every((cd) => cd.totalPercentUsage === 0);
  const data = isEmpty
    ? {
        labels: ["داده‌ای برای نمایش وجود ندارد"],
        datasets: [
          {
            label: "میزان مصرف",
            data: [100],
            backgroundColor: ["#D1D5DB"],
            borderWidth: 2,
          },
        ],
      }
    : {
        labels: props.chartData.map((cd) =>
          cd.totalPercentUsage > 0 ? cd.categoryTitle : undefined
        ),
        datasets: [
          {
            label: "میزان مصرف",
            data: props.chartData.map((cd) => cd.totalPercentUsage),
            backgroundColor: props.chartData.map((cd) =>
              cd.totalPercentUsage > 0 ? cd.color : undefined
            ),
            borderWidth: 2,
          },
        ],
      };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: isEmpty
        ? { enabled: false }
        : {
            rtl: true,
            textDirection: "rtl" as const,
            backgroundColor: "#111827",
            titleAlign: "left" as const,
            bodyAlign: "right" as const,
            padding: 12,
            titleFont: {
              family: "Peyda" as const,
              size: 13,
              weight: "normal" as const,
            },
            bodyFont: {
              family: "Peyda" as const,
              size: 11,
              weight: "normal" as const,
            },
          },
    },
  };

  return (
    <div className="flex flex-col items-center xxs:gap-4 lg:gap-2 xl:gap-4 2xl:gap-6">
      <div className="flex-grow xxs:w-[250px] xs:w-[330px] sm:w-[400px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] aspect-square">
        <Pie data={data} options={options} />
      </div>
      <div
        className={`w-full ${
          data.labels.length <= 1 ? "flex" : "grid grid-cols-3"
        } self-start gap-2`}
      >
        {data.labels.map((label, index) => (
          <div
            className={`${
              label !== undefined
                ? "flex flex-row items-center gap-2"
                : "hidden"
            }`}
          >
            <div
              className="w-4 aspect-square rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></div>
            <small className="font-normal !font-peyda">{label}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
