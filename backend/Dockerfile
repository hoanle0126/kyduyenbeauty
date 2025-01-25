# FROM php:8.2-fpm

# WORKDIR /var/www/html

# RUN apt-get update && apt-get install -y libzip-dev zip unzip libpng-dev curl git procps \
#     && docker-php-ext-install pdo_mysql zip gd

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# COPY . .

# RUN composer install

# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# EXPOSE 8000

# CMD php artisan serve --host=0.0.0.0 --port=8000

FROM php:8.2-fpm

# Cài đặt các tiện ích cần thiết
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Cài đặt Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Tạo thư mục ứng dụng
WORKDIR /var/www

# Sao chép mã nguồn
COPY . .

# Cài đặt phụ thuộc Laravel
RUN composer install --no-dev --optimize-autoloader

# Thiết lập quyền
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Lệnh khởi động PHP-FPM
CMD ["php-fpm"]
