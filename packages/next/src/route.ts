import Router from 'react-auth-kit/route';

import {usePathname, useRouter, redirect} from 'next/navigation';

/**
 * Next Js
 * React Auth Kit Plugin
 */
const ReactRouterPlugin: Router = {
  navigate: function({to}: { to: string; }): void {
    redirect(to);
  },
  useNavigate: function(): ({to}: { to: string; }) => void {
    const router = useRouter();
    return ({to}: { to: string; }) => router.push(to);
  },
  usePath: function(): () => string {
    const pathname = usePathname();
    return () => pathname;
  },
};

export default ReactRouterPlugin;
