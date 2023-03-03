import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { getServerSession } from 'next-auth'
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);

  return (
    <html>
      <head/>
      <body>
        <SessionProvider session={session}>
        {!session ? (
          <Login/>
        ) : (
          <div className="flex ">
          {/* side bar */}
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[15rem] ">
            <SideBar />
          </div>
          {/* client provider */}
          <ClientProvider />
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
        )}
        </SessionProvider>
      </body>
    </html>
  );
}