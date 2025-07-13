import drumData from "./data";
import DrumKeys from "./DrumKeys";

const DrumBackgounds = () => {
  return (
    <div
      className="
        bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%
        h-screen
        w-screen
        flex
        flex-col
        items-center
      "
    >
      <div className="text-white">
        <h1 className="text-5xl font-bold text-shadow-lg mt-8">Drum Keys</h1>
      </div>
      <div className="flex-1 flex items-center justify-center w-full min-h-32">
        {drumData.map((data) => (
          <DrumKeys key={data.keyCode} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DrumBackgounds;
