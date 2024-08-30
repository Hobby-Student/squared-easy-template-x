import { ImagePlugin } from './image';
import { ImageBase64Plugin } from './imageBase64';
import { LinkPlugin } from './link';
import { LoopPlugin } from './loop';
import { RawXmlPlugin } from './rawXml';
import { TemplatePlugin } from './templatePlugin';
import { TextPlugin } from './text';

export function createDefaultPlugins(): TemplatePlugin[] {
    return [
        new LoopPlugin(),
        new RawXmlPlugin(),
        new ImagePlugin(),
        new ImageBase64Plugin(),
        new LinkPlugin(),
        new TextPlugin()
    ];
}
