import React from "react";

export const Button = ({ as: As='button', className='', ...props }) => (
  <As className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props} />
);

export const Card = ({ className='', children }) => (
  <div className={`rounded-2xl border bg-white dark:bg-slate-900 ${className}`}>{children}</div>
);
export const CardHeader = ({ className='', children }) => (
  <div className={`p-4 md:p-5 ${className}`}>{children}</div>
);
export const CardTitle = ({ className='', children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
export const CardDescription = ({ className='', children }) => (
  <p className={`text-sm text-slate-600 dark:text-slate-300 ${className}`}>{children}</p>
);
export const CardContent = ({ className='', children }) => (
  <div className={`p-4 md:p-5 ${className}`}>{children}</div>
);

export const Input = (props) => (
  <input {...props} className={`h-10 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-300 ${props.className||''}`} />
);

export const Textarea = (props) => (
  <textarea {...props} className={`rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 ${props.className||''}`} />
);

export const Badge = ({ className='', variant='solid', children }) => {
  const base = "inline-flex items-center rounded-full text-xs px-3 py-1";
  const solid = "bg-slate-900 text-white";
  const outline = "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300";
  const secondary = "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100";
  const style = variant==='outline'?outline: variant==='secondary'?secondary: solid;
  return <span className={`${base} ${style} ${className}`}>{children}</span>;
};
