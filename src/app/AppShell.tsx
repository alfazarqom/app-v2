import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="bg-[#E8ECEF] min-h-screen flex items-center justify-center p-0 sm:p-6 font-sans antialiased text-slate-900 selection:bg-[#FF5733] selection:text-white">
      <div className="relative w-full max-w-[1440px] min-h-screen lg:min-h-[800px] h-screen bg-[#FAFAFB] sm:rounded-[28px] shadow-[0_30px_70px_-15px_rgba(15,23,42,0.2)] overflow-hidden flex flex-col border-0 sm:border-[8px] sm:border-white">
        {children}
      </div>
    </div>
  );
}
