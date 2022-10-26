/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_CALENDAR_API_URL: string;
	readonly VITE_ENV_MODE: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
