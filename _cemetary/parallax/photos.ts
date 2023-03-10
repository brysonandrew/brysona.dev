
const vertical = "2/3";
const horizontal = "3/2";
export interface PhotoMetadata {
  aspectRatio: string;
}
export const londonPhotosMetadata: PhotoMetadata[] = [
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: vertical },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
];

export const amsterdamPhotosMetadata: PhotoMetadata[] = [
  { aspectRatio: horizontal },
  { aspectRatio: horizontal },
  { aspectRatio: vertical },
  { aspectRatio: horizontal },
  { aspectRatio: horizontal },
  { aspectRatio: horizontal },
  { aspectRatio: horizontal },
  { aspectRatio: horizontal },
];
