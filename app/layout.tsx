import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* Include shared UI here e.g. a header or sidebar */}
      <head />
      <Providers>
        <body className="bg-grey-200 dark:bg-zinc-900  transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
