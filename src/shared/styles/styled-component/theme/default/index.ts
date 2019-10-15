import { ThemeInterface } from '@/styled-component/interfaces/theme.interface';
import ColorDefaultVariableStyle from './color.variable';
import FontDefaultVariableStyle from './font.variable';

const DefaultTheme: ThemeInterface = {
    color: ColorDefaultVariableStyle,
    font: FontDefaultVariableStyle
};

export default DefaultTheme;
