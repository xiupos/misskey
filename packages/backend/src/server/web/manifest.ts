import Koa from 'koa';
import manifest from './manifest.json' assert { type: 'json' };
import { fetchMeta } from '@/misc/fetch-meta.js';
import useragent from 'express-useragent';

export const manifestHandler = async (ctx: Koa.Context) => {
	const json = JSON.parse(JSON.stringify(manifest));

	const instance = await fetchMeta(true);

	json.short_name = instance.name || 'Misskey';
	json.name = instance.name || 'Misskey';
	if (instance.themeColor) json.theme_color = instance.themeColor;

	const source = ctx.header['user-agent'] || '';
	const ua = useragent.parse(source);
	if (ua.isDesktop) {
		json.display = 'minimal-ui';
	}

	ctx.body = json;
};
