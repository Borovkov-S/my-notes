# Название вашего приложения

Краткое описание вашего приложения. Например: Мобильное приложение для управления заметками с дедлайнами, разработанное на React Native (Expo).

## Технологический стек

- **React Native (Expo)** - фреймворк для разработки мобильных приложений
- **Zustand** - управление состоянием
- **MMKV** - эффективное и быстрое хранилище данных
- **Android Studio** - эмулятор Android для разработки и тестирования

## Требования

Перед началом работы убедитесь, что у вас установлены:

- [Node.js](https://nodejs.org/) (версия 16.x или выше)
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)
- [Android Studio](https://developer.android.com/studio) (для эмуляции Android)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Установка

### 1. Клонирование репозитория

```bash
git clone https://github.com/Borovkov-S/my-notes.git
cd my-notes
```

### 2. Установка зависимостей

```bash
npm install
# или
yarn install
```

### 3. Настройка Android Studio

## 3.1 Установите необходимые компоненты в Android Studio:
Откройте Android Studio

Перейдите в SDK Manager (иконка с кубиком в правом верхнем углу)

Во вкладке SDK Platforms убедитесь, что установлена последняя версия Android SDK

Во вкладке SDK Tools установите:

Android SDK Build-Tools

Android Emulator

Android SDK Platform-Tools

Intel x86 Atom_64 System Image (или ARM для M1/M2 Mac)

## 3.2 Настройте переменные окружения
Добавьте следующие строки в ваш ~/.bashrc, ~/.zshrc или ~/.bash_profile:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Примените изменения

```bash
source ~/.zshrc  # или source ~/.bashrc
```

## 3.3 Создайте виртуальное устройство (AVD)
# 1. В Android Studio зайдте в Projects

# 2. Нажмите More actions

# 3. Выберите Virtual Device Manager

# 4. Добавьте устройство через плюсик в верхнем левом углу (напрмер, Medium Phone) и нажмите Next

# 5. Выберите системный образ и нажмите Finish

### 4. Запуск на Android эмуляторе
# Откройте Android Studio

# Запустите AVD Manager и запустите созданное ранее виртуальное устройство (зеленая кнопка Play)

Затем введите 

```bash
npm run android
#или
npx expo run:android
```

