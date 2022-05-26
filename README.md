**#Clevertap SDK with React Native TypeScript**

**Step 1** :- Install typescript
npm install --dev typescript

**Step 2** :- Create typescript Project with TS project 
npx react-native init ShoppingList --template react-native-template-typescript .

**Step 3** :- Install Clevertap SDK 
npm install --save clevertap-react-native

**Step 4** :- Before starting the npm server add the following to the build.gradle.kts to avoid java source error if exists . 

```
java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        jvmTarget = "11"
    }
}
```


**Step 5** :- Start the server using vscode and open the android project from android studio 

``` npx react-native run-android ```



