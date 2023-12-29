export default function save({ attributes }) {
  const { counter } = attributes;

  return (
    <div className="flex flex-col items-center">
      <div className="counter-no">
        <span class="counters-count">{counter.count}</span>
        {counter.suffix}
      </div>
      <span className="font-poppins text-primary-800 sm:text-xl">
        {counter.name}
      </span>
    </div>
  );
}
