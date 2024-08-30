import { MimeType } from '../../mimeType';
import { PluginContent } from '../pluginContent';

export type ImageBase64Format = MimeType.Jpeg | MimeType.Png | MimeType.Gif | MimeType.Bmp | MimeType.Svg;

export interface ImageBase64Content extends PluginContent {
    _type: 'image';
    source: string;
    format: ImageBase64Format;
    width: number;
    height: number;
    /**
     * Optional. If this is not set the image will be marked as "decorative".
     */
    altText?: string;
    /**
     * Optional. A value between 0 and 100. If this is not set the image will be fully opaque.
     */
    transparencyPercent?: number;
}
