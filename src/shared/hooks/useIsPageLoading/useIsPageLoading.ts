import { usePathname, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

const loadStartHandlers: Function[] = [];

const addLoadStartHandler = (handler: Function) => {
  loadStartHandlers.push(handler);
};

const removeLoadStartHandler = (handler: Function) => {
  const index = loadStartHandlers.indexOf(handler);

  if (index === -1) {
    return false;
  }

  loadStartHandlers.splice(index, 1);

  return true;
};

document.addEventListener('click', (evt) => {
  const target = evt.target as HTMLElement;

  const linkEl = target.closest('a');

  if (!linkEl) {
    return;
  }

  const href = linkEl.getAttribute('href');

  if (!href || !href.startsWith('/')) {
    return;
  }

  const futurePathname = href.split('?')[0].replace(/$\//, '');

  if (futurePathname !== window.location.pathname.replace(/$\//, '')) {
    loadStartHandlers.forEach((fn) => {
      fn();
    });
  }
});

export const useIsPageLoading = () => {
  const pathname = usePathname();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(false);
  }, [pathname]);

  useEffect(() => {
    const handleLoadStart = () => {
      setIsPageLoading(true);
    };

    addLoadStartHandler(handleLoadStart);

    return () => {
      removeLoadStartHandler(handleLoadStart);
    };
  }, []);

  return isPageLoading;
};
