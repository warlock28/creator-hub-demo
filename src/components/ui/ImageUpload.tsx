import { useState, useRef, ChangeEvent } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
    onUpload: (file: File) => Promise<string>;
    currentImage?: string;
    className?: string;
    label?: string;
    aspectRatio?: 'square' | 'video' | 'portrait' | 'banner' | 'auto';
}

export function ImageUpload({
    onUpload,
    currentImage,
    className,
    label = 'Upload Image',
    aspectRatio = 'auto',
}: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = async (file: File) => {
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Upload
        setUploading(true);
        try {
            await onUpload(file);
        } catch (error: any) {
            console.error('Upload error:', error);
            alert(error.message || 'Failed to upload image');
            setPreview(currentImage || null);
        } finally {
            setUploading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    const handleClear = () => {
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const aspectClasses = {
        square: 'aspect-square',
        video: 'aspect-video',
        portrait: 'aspect-[3/4]',
        banner: 'aspect-[3/1]',
        auto: '',
    };

    return (
        <div className={cn('space-y-2', className)}>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
            />

            <div
                onClick={() => !uploading && fileInputRef.current?.click()}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={cn(
                    'relative border-2 border-dashed rounded-lg overflow-hidden cursor-pointer transition-all',
                    'hover:border-primary hover:bg-accent/50',
                    dragActive && 'border-primary bg-accent',
                    uploading && 'cursor-not-allowed opacity-60',
                    aspectClasses[aspectRatio],
                    !preview && 'min-h-[200px]'
                )}
            >
                {preview ? (
                    <>
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                        {!uploading && (
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClear();
                                }}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                        {uploading ? (
                            <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                        ) : (
                            <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                        )}
                        <p className="text-sm font-medium mb-1">
                            {uploading ? 'Uploading...' : label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Drag & drop or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG, WebP up to 5MB
                        </p>
                    </div>
                )}

                {uploading && preview && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-white" />
                    </div>
                )}
            </div>
        </div>
    );
}
