'use client';

import { useIsPageLoading } from '@/shared/hooks/useIsPageLoading';

export const PageLoader = () => {
  const isPageLoading = useIsPageLoading();

  // return isPageLoading ? (
  //   <div className="fixed bottom-10 right-10 bg-secondary p-2 rounded-md">
  //     {/* Loading */}
  //   </div>
  // ) : null;
};
