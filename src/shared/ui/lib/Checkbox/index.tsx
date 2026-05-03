'use client';

import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

type CheckboxProperties = Omit<React.ComponentProps<'input'>, 'type'> & {
  indicatorClassName?: string;
  wrapperClassName?: string;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProperties>(
  (
    { className, indicatorClassName, wrapperClassName, checked, ...properties },
    reference,
  ) => (
    <label
      className={cn(
        'relative inline-flex h-6 w-6 shrink-0 items-center justify-center',
        wrapperClassName,
      )}
    >
      <input
        ref={reference}
        checked={checked}
        className={cn('peer sr-only', className)}
        type='checkbox'
        {...properties}
      />
      <span className='absolute inset-0 border-2 border-black bg-white transition-colors peer-checked:bg-lime-400 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-black' />
      <Check
        className={cn(
          'relative h-4 w-4 scale-75 text-black opacity-0 transition-all peer-checked:scale-100 peer-checked:opacity-100',
          indicatorClassName,
        )}
      />
    </label>
  ),
);

Checkbox.displayName = 'Checkbox';
