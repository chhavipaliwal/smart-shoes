// import { auth } from '@/auth';
// import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
// import UserDashboard from '@/components/dashboard/UserDashboard';
// import { redirect } from 'next/navigation';

import DashboardPage from '@/components/dashboard/dashboard';

// export default async function Page() {
//   const session = await auth();
//   if (!session) {
//     redirect('/auth/login');
//   }
//   return (
//     <>
//       {session && session.user && (
//         <>
//           {session.user.role === 'admin' ? (
//             <AdminDashboard />
//           ) : session.user.role === 'user' ? (
//             <UserDashboard />
//           ) : null}
//         </>
//       )}
//     </>
//   );
// }
export default function Page() {
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
