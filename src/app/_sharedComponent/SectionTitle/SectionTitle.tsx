export default function SectionTitle({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        {subtitle} <span className="text-emerald-600">{title}</span>
      </h2>
    </div>
  );
}