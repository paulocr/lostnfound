// myCustomTheme.ts
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const RRPP: CustomThemeConfig = {
	name: 'RRPP',
	properties: {
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		'--on-primary': '#F2F2F2',
		'--on-secondary': '#444444',
		'--on-tertiary': '#444444',
		'--on-success': '#444444',
		'--on-warning': '#444444',
		'--on-error': '#F2F2F2',
		'--on-surface': '255 255 255 255',
		'--color-primary-50': '211 229 255',
		'--color-primary-100': '169 206 253',
		'--color-primary-200': '127 182 250',
		'--color-primary-300': '85 159 248',
		'--color-primary-400': '43 135 245',
		'--color-primary-500': '1 112 243',
		'--color-primary-600': '3 97 210',
		'--color-primary-700': '4 83 178',
		'--color-primary-800': '6 68 145',
		'--color-primary-900': '7 54 113',
		'--color-secondary-50': '152 184 255',
		'--color-secondary-100': '122 161 232',
		'--color-secondary-200': '92 139 209',
		'--color-secondary-300': '61 116 185',
		'--color-secondary-400': '31 94 162',
		'--color-secondary-500': '1 71 139',
		'--color-secondary-600': '1 57 118',
		'--color-secondary-700': '1 43 97',
		'--color-secondary-800': '0 28 76',
		'--color-secondary-900': '0 14 55',
		'--color-tertiary-50': '194 160 255',
		'--color-tertiary-100': '160 137 247',

		'--color-tertiary-200': '127 114 240',
		'--color-tertiary-300': '93 92 232',
		'--color-tertiary-400': '60 69 225',
		'--color-tertiary-500': '26 46 217',
		'--color-tertiary-600': '21 37 193',
		'--color-tertiary-700': '16 28 168',
		'--color-tertiary-800': '10 18 144',
		'--color-tertiary-900': '5 9 119',
		'--color-success-50': '170 255 236',
		'--color-success-100': '152 249 228',
		'--color-success-200': '134 244 219',
		'--color-success-300': '116 238 211',
		'--color-success-400': '98 233 202',
		'--color-success-500': '80 227 194',
		'--color-success-600': '65 191 164',
		'--color-success-700': '50 155 133',
		'--color-success-800': '35 118 103',
		'--color-success-900': '20 82 72',
		'--color-warning-50': '255 239 207',
		'--color-warning-100': '253 228 183',
		'--color-warning-200': '252 217 158',
		'--color-warning-300': '250 207 134',
		'--color-warning-400': '249 196 109',
		'--color-warning-500': '247 185 85',
		'--color-warning-600': '230 163 69',
		'--color-warning-700': '213 142 53',
		'--color-warning-800': '195 120 37',
		'--color-warning-900': '178 99 21',
		'--color-error-50': '247 212 214',
		'--color-error-100': '246 182 181',
		'--color-error-200': '245 152 149',
		'--color-error-300': '245 123 116',
		'--color-error-400': '244 93 84',
		'--color-error-500': '243 63 51',
		'--color-error-600': '224 50 41',
		'--color-error-700': '205 38 31',
		'--color-error-800': '186 25 20',
		'--color-error-900': '167 13 10',

		"--color-surface-50": "255 255 255",
		"--color-surface-100": "231 232 243",
		"--color-surface-200": "207 209 230",
		"--color-surface-300": "182 187 218",
		"--color-surface-400": "158 164 205",
		"--color-surface-500": "134 141 193",
		"--color-surface-600": "111 120 170",
		"--color-surface-700": "88 99 147",
		"--color-surface-800": "65 77 123",
		"--color-surface-900": "42 56 100",
	}
};

// export const myCustomTheme: CustomThemeConfig = {
//     name: 'my-custom-theme',
//     properties: {
//         // =~= Theme Properties =~=
//         '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
//         '--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
//         '--theme-font-color-base': '#444444',  // Dark Gray
//         '--theme-font-color-dark': '#F2F2F2',  // Light Gray
//         '--theme-rounded-base': '9999px',
//         '--theme-rounded-container': '8px',
//         '--theme-border-base': '1px',

//         // =~= Theme On-X Colors =~=
//         '--on-primary': '#F2F2F2',    // Light Gray (on primary blue)
//         '--on-secondary': '#444444', // Dark Gray (on pink)
//         '--on-tertiary': '#444444',  // Dark Gray (on gold)
//         '--on-success': '#444444',  // Dark Gray
//         '--on-warning': '#444444',   // Dark Gray
//         '--on-error': '#F2F2F2',    // Light Gray
//         '--on-surface': '#444444',   // Dark Gray

//         // =~= Theme Colors  =~=
//         // primary | #1224ba

// 		"--color-primary-50": "#03045e",
// 		"--color-primary-100": "#010113",
// 		"--color-primary-200": "#010226",
// 		"--color-primary-300": "#020338",
// 		"--color-primary-400": "#02044b",
// 		"--color-primary-500": "#03045e",
// 		"--color-primary-600": "#0508ae",
// 		"--color-primary-700": "#0f12f8",
// 		"--color-primary-800": "#5f61fa",
// 		"--color-primary-900": "#afb0fd",
//         '--color-secondary-50': '#0077b6',
//         '--color-secondary-100': '#001825',
//         '--color-secondary-200': '#003049',
//         '--color-secondary-300': '#00486e',
//         '--color-secondary-400': '#005f93',
//         '--color-secondary-500': '#0077b6',
//         '--color-secondary-600': '#00a2f9',
//         '--color-secondary-700': '#3bbaff',
//         '--color-secondary-800': '#7cd1ff',
//         '--color-secondary-900': '#bee8ff',
//         '--color-tertiary-50': '#00b4d8',
//         '--color-tertiary-100': '#00242b',
//         '--color-tertiary-200': '#004756',
//         '--color-tertiary-300': '#006b81',
//         '--color-tertiary-400': '#008fab',
//         '--color-tertiary-500': '#00b4d8',
//         '--color-tertiary-600': '#12d8ff',
//         '--color-tertiary-700': '#4ee1ff',
//         '--color-tertiary-800': '#89ebff',
//         '--color-tertiary-900': '#c4f5ff',
//         '--color-success-50': '232 242 228', // #e8f2e4
//         '--color-success-100': '225 238 219', // #e1eedb
//         '--color-success-200': '217 234 210', // #d9ead2
//         '--color-success-300': '195 221 183', // #c3ddb7
//         '--color-success-400': '149 195 130', // #95c382
//         '--color-success-500': '104 169 76', // #68a94c
//         '--color-success-600': '94 152 68', // #5e9844
//         '--color-success-700': '78 127 57', // #4e7f39
//         '--color-success-800': '62 101 46', // #3e652e
//         '--color-success-900': '51 83 37', // #335325
//         '--color-warning-50': '228 246 220', // #e4f6dc
//         '--color-warning-100': '219 243 208', // #dbf3d0
//         '--color-warning-200': '211 241 197', // #d3f1c5
//         '--color-warning-300': '184 232 161', // #b8e8a1
//         '--color-warning-400': '130 214 91', // #82d65b
//         '--color-warning-500': '77 197 21', // #4dc515
//         '--color-warning-600': '69 177 19', // #45b113
//         '--color-warning-700': '58 148 16', // #3a9410
//         '--color-warning-800': '46 118 13', // #2e760d
//         '--color-warning-900': '38 97 10', // #26610a
//         '--color-error-50': '227 226 224', // #e3e2e0
//         '--color-error-100': '218 216 214', // #dad8d6
//         '--color-error-200': '208 206 204', // #d0cecc
//         '--color-error-300': '180 177 173', // #b4b1ad
//         '--color-error-400': '124 118 112', // #7c7670
//         '--color-error-500': '68 59 50', // #443b32
//         '--color-error-600': '61 53 45', // #3d352d
//         '--color-error-700': '51 44 38', // #332c26
//         '--color-error-800': '41 35 30', // #29231e
//         '--color-error-900': '33 29 25', // #211d19
//         '--color-surface-50': '#90e0ef', // #ddeded
//         '--color-surface-100': '#0a444f', // #d2e6e7
//         '--color-surface-200': '#15889f', // #c7e0e1
//         '--color-surface-300': '#2ac4e3', // #a5cecf
//         '--color-surface-400': '#79daee', // #62a9aa
//         '--color-surface-500': '#caf0f8', // #1f8486
//         '--color-surface-600': '#d4f3f9', // #1c7779
//         '--color-surface-700': '#dff6fb', // #176365
//         '--color-surface-800': '#e9f9fc', // #134f50
//         '--color-surface-900': '#f4fcfe' // #0f4142
//     }
// };
