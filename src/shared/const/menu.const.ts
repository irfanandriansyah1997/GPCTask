import { DefaultMenuItemComponentProps } from '@/interfaces/component/component-menu-item.interface';

export const DefaultMenu: DefaultMenuItemComponentProps[] = [
    {
        exact: true,
        icon: 'home_work',
        link: '/',
        type: 'default',
        label: 'ingin kembali ke halaman awal ?',
        children: 'Halaman Awal'
    },
    {
        exact: true,
        icon: 'transform',
        link: '/triangle',
        type: 'default',
        label: 'transform, translasi dan rotasi',
        children: 'Simulasi Trigonometri'
    },
    {
        exact: true,
        icon: 'show_chart',
        link: '/brute-force',
        type: 'default',
        label: 'percobaan brute force pada satu garis',
        children: 'Brute Force'
    }
];
