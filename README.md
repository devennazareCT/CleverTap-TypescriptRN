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

**Clevertap SDK**

![image](https://user-images.githubusercontent.com/100521132/170477237-dee9deff-4689-4ccc-aff6-dfe019f6f242.png)



![image](https://user-images.githubusercontent.com/100521132/170476980-795cd088-2bbb-4182-b1cb-1e157bbf9ac7.png)

