import { SiReact,SiTailwindcss,SiDjango,SiMariadb,SiScikitlearn,SiNextdotjs,SiTypescript,SiGraphql,SiD3Dotjs,SiRust,SiTauri,SiSqlite,SiWebrtc,SiGo,SiRedis,SiDocker, SiKubernetes,} from 'react-icons/si'

const TECH_ICONS = { React: SiReact,TailwindCSS: SiTailwindcss,Django: SiDjango,MariaDB: SiMariadb,'Scikit Learn': SiScikitlearn,'Next.js': SiNextdotjs,TypeScript: SiTypescript,GraphQL: SiGraphql,'D3.js': SiD3Dotjs,Rust: SiRust, Tauri: SiTauri, SQLite: SiSqlite, WebRTC: SiWebrtc, Go: SiGo,Redis: SiRedis, Docker: SiDocker,  Kubernetes: SiKubernetes,}

const BADGE_CLASSES =
    'inline-flex items-center justify-center h-8 min-w-8 px-2 rounded-full border bg-white/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-slate-600/50'

export function TechIcon({ name }) {
    const Icon = Object.hasOwn(TECH_ICONS, name) ? TECH_ICONS[name] : null

    return (
        <span role="img" aria-label={name} title={name} className={BADGE_CLASSES}>
            {Icon ? (
                <Icon className="h-4 w-4" aria-hidden="true" />
            ) : (
                <span className="text-xs font-medium">{name}</span>
            )}
        </span>
    )
}

export function TechIconList({ items = [] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((name) => (
                <TechIcon key={name} name={name} />
            ))}
        </div>
    )
}