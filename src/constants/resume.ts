// Which resume source gets compiled to the PDF the site serves.
// Each version maps to src/assets/resume-<version>.tex.
export const RESUME_VERSIONS = ['v1', 'v2', 'v3'] as const;

export type ResumeVersion = (typeof RESUME_VERSIONS)[number];

export const RESUME_VERSION: ResumeVersion = 'v3';
