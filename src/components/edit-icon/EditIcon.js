export default function EditIcon() {
  return (
    <div class="absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex">
      <svg viewBox="0 0 18 18" width={16} height={16} className="fill-white">
        <use xlinkHref="/icons.svg#icon-pencil-fill" />
      </svg>
    </div>
  );
}
