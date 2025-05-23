import Link from 'next/link';

export default function TopNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <a className="btn btn-ghost text-xl">Rejseplanlægger</a>
      </div>
      <div className="flex-none">
        <div className="w-10"></div>
      </div>
    </div>
  );
}