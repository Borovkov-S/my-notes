import { Link, Stack } from "expo-router"
import { View } from "react-native"

const NotFoundScreen = () => {
  return (
    <>
    <Stack.Screen options={{title: 'Страница не найдена'}} />
    <View>
      <Link href='./'>
        Вернуться на главный экран
      </Link>
    </View>
    </>
  )
}

export default NotFoundScreen