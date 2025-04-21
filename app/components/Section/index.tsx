export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 ">{children}</section>
  );
}
