export const BlogCard = ({ title }: { title: string }) => {
  return (
    <div className="bg-white rounded p-4 text-amber-500 cursor-pointer">
      {title}
    </div>
  );
};
