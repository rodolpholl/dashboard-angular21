import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  
  // Don't show loading for requests that explicitly skip it (optional)
  if (req.headers.has('X-Skip-Loading')) {
    return next(req);
  }

  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
