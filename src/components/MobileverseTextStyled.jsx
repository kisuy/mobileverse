import { StyleSheet, Text } from 'react-native';
import theme from '../../theme.js'

const styles = StyleSheet.create({

    bold: {
        fontWeight: 'bold'
    },
    big: {
        fontSize: theme.fonts.title
    },
    tiny: {
        fontSize: theme.fonts.tiny
    },
    normal: {
        fontSize: theme.fonts.normal
    },
    medium: {
        fontSize: theme.fonts.medium, 


    }
})

export default function MobileverseTextStyled({ children, style, bold, big, tiny, normal, medium, ... restOfProps }) {

    const styleDefinition = [

        styles.text,
        bold && styles.bold,
        big && styles.big,
        tiny && styles.tiny,
        normal && styles.normal,
        medium && styles.medium
    ]
    return  <Text style={[styleDefinition, style]} {... restOfProps}> {children}</Text>

}