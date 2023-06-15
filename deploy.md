> React Native ile yazılmış bir projeyi hem iOS hem de Android platformları için uygulama marketlerine yükleme sürecini aşağıdaki adımları takip ederek gerçekleştirebilirsiniz.

1. Proje Ayarları:

- React Native projesinin son halini aldığından emin olun. Tüm özelliklerin doğru bir şekilde çalıştığından ve hataların giderildiğinden emin olun.

2. Uygulama Sürümünü Artırın:

- Her yeni sürümün, önceki sürümle aynı sürüm numarasına sahip olmaması gerektiğini unutmayın. Sürüm numarasını her gönderimde artırmanız gerekmektedir.

- Android için: android/app/build.gradle dosyasını açın ve versionCode ve versionName değerlerini güncelleyin.
- iOS için: Xcode'da Info.plist dosyasını açın ve CFBundleShortVersionString ve CFBundleVersion değerlerini güncelleyin.

3. Uygulamayı Derleme (Build):

- Projenizi üretim-Release modunda derlemeniz gerekmektedir.

- Android için: Terminalden, proje dizininizde ./gradlew assembleRelease komutunu çalıştırın.
    - APK dosyası android/app/build/outputs/apk/release/app-release.apk konumunda oluşturulacaktır.
    - IOS için: Xcode'da Product -> Scheme -> Edit Scheme'i seçin. Açılan pencerede Run sekmesini seçin ve Build Configuration'ı Release olarak değiştirin. Ardından Product -> Archive'i seçin.

4. App Store ve Google Play Store Hesapları Oluşturma:

- Uygulamanızı yükleyebilmek için her iki platformda da birer geliştirici hesabına ihtiyacınız olacak. Bu hesapları oluşturduktan sonra, uygulamanızın ayarlarını bu platformlarda da yapmanız gerekecektir.

5. Uygulamayı Yükleme:

- Google Play Store için:
    - Google Play Console'da yeni bir uygulama oluşturun ve gereken bilgileri doldurun. APK dosyanızı Release bölümüne yükleyin. Uygulamanızın açıklamasını, ekran görüntülerini ve diğer bilgileri doldurduktan sonra uygulamanızı yayınlamak için gönderin.

- Apple App Store için:
    - Apple Developer hesabınıza giriş yapın ve App Store Connect'e gidin. Yeni bir uygulama oluşturun ve gerekli bilgileri doldurun. Daha sonra Xcode'dan uygulamanızın Archive'ini yükleyin. Uygulamanızın açıklamasını, ekran görüntülerini ve diğer bilgileri doldurduktan sonra inceleme için gönderin.

6. Onay