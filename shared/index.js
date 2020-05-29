import { Dimensions, Platform, Animated } from 'react-native'

export const screenWidth = Math.round(Dimensions.get('screen').width)
export const headerTopPadding = Platform.OS === 'android' ? 20 : 10
export const lightTheme = ['#539cec', '#0f5cbc']
export const darkTheme = ['#aaa', '#aaa']
export const maxTransactionSteps = 4
export const mainComponentHeights = ['10%', '4.5%', '3%', '1%']
export const actionCaptions = ['Далі', 'Підтвердити', 'Переказати', 'Зберегти як шаблон']
export const headerCaptions = ['Грошові перекази', 'Сума переказу', 'Підтвердження операції', 'Результат']

export const opacity = new Animated.Value(1)
export const fadeIn = () => Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true })
export const fadeOut = () => Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true })
export const offset = new Animated.Value(screenWidth)
export const slideIn = () => Animated.timing(offset, { toValue: 0, duration: 200, useNativeDriver: true })

export const splitByDigitsAmount = (text, amount) => {
  const regexp = new RegExp(`(\\d{${amount}})`, 'g')
  return text.split(regexp).filter((_, i) => i % 2 !== 0)
}