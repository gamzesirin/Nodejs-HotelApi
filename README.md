# Otel Rezervasyon Sistemi Backend

Bu proje, bir otel rezervasyon sisteminin backend kısmını oluşturmak için Node.js, Express.js ve MongoDB kullanılarak geliştirilmiştir. Sistem, kullanıcı kaydı, otel ve oda yönetimi gibi temel işlevleri gerçekleştirebilen RESTful API'lar sağlar.

## Başlangıç

### Önkoşullar

Projeyi çalıştırmadan önce sisteminizde Node.js ve npm'in (Node.js Package Manager) yüklü olduğundan emin olun. Ayrıca, MongoDB veritabanınıza uzaktan veya yerel olarak erişim sağlamanız gerekmektedir.

### Kurulum

Projeyi kurmak ve çalıştırmak için aşağıdaki adımları takip edin:

1. **Reposu Klonlayın**

    ```bash
    git clone  https://github.com/berkayderin/Hotel-Api-Nodejs.git
    cd Hotel-Api-Nodejs
    ```

2. **Bağımlılıkları Yükleyin**

    Projedeki tüm bağımlılıkları yüklemek için aşağıdaki komutu kullanın:

    ```bash
    npm install
    ```

3. **.env Dosyasını Oluşturun**

    Projeyi çalıştırmadan önce, kök dizinde bir `.env` dosyası oluşturun ve aşağıdaki değişkenleri tanımlayın:

    ```dotenv
    MONGO_URL=mongodb+srv://<username>:<password>@<your-cluster-url>/<database>?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret
    PORT=3001
    ```

4. **Sunucuyu Başlatın**

    Sunucuyu başlatmak için aşağıdaki komutu kullanın:

    ```bash
    npm start
    ```

    Sunucu başarıyla çalıştığında, konsolda `"3001 Portunda server çalışıyor."` mesajını göreceksiniz.

## Kullanım

Bu backend sistemi, aşağıdaki temel işlevleri sağlayan RESTful API endpoint'lerini içerir:

- **Kullanıcı İşlemleri:**
  - Kayıt: `POST /register`
  - Giriş: `POST /login`
- **Otel İşlemleri:**
  - Otel listeleme: `GET /api/hotels`
  - Otel detay: `GET /api/hotels/:id`
  - Otel ekleme: `POST /api/hotels` (Admin yetkisi gerektirir)
  - Otel güncelleme: `PATCH /api/hotels/:id` (Admin yetkisi gerektirir)
  - Otel silme: `DELETE /api/hotels/:id` (Admin yetkisi gerektirir)
- **Oda İşlemleri:**
  - Oda listeleme: `GET /api/rooms`
  - Oda detay: `GET /api/rooms/:id`
  - Oda ekleme: `POST /api/rooms/:hotelId` (Admin yetkisi gerektirir)
  - Oda güncelleme: `PATCH /api/rooms/:id` (Admin yetkisi gerektirir)
  - Oda silme: `DELETE /api/rooms/:id/:hotelId` (Admin yetkisi gerektirir)

Her bir endpoint için detaylı kullanım örnekleri ve beklenen request/response yapıları projenin dokümantasyonunda yer almaktadır.

## Geliştirme

### Mimarisi

Projede MVC (Model-View-Controller) mimarisi benimsenmiştir. `models`, `views`, ve `controllers` klasörleri altında ilgili dosyalar yer almaktadır. `routes` klasörü, uygulamanın rotalarını ve bu rotaların controller'lar ile nasıl ilişkilendirildiğini tanımlar.

### Güvenlik

- **JWT (JSON Web Tokens):** Kullanıcı kimlik doğrulama işlemleri için JWT kullanılmaktadır.
- **bcryptjs:** Kullanıcı şifrelerinin güvenli bir şekilde saklanması için şifreleme yapılır.
- **cors:** Farklı kaynaklardan gelen isteklerin yönetimi için kullanılır.

## Katkıda Bulunma

Projeye katkıda bulunmak isteyenler pull request gönderebilir veya mevcut sorunları çözmek için issue açabilirler.
