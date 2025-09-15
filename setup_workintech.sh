#!/usr/bin/env bash
set -e

# MyProjects kökünde çalıştığından emin ol
cd "$(dirname "$0")"

# Ana klasör
mkdir -p workintech

# Gün yapısı: ders/, antrenman/, proje/episode-{1,2,3}/
create_day() {
  base="$1"
  mkdir -p "$base/ders" "$base/antrenman"
  for ep in 1 2 3; do
    mkdir -p "$base/proje/episode-$ep"
  done
}

# === SPRINT 5 ===
for day in "day01-dom-kavrami" "day02-dom-eventleri" "day03-component-kavrami" "day04-axios-ve-api-ler"; do
  create_day "workintech/sprint5/$day"
done

# === SPRINT 6 ===
for day in "day01-react-nedir" "day02-componentler-veri-akisi-paylasimi" "day03-lifecycle-useeffect" "day04-css-in-js-ve-kutuphanler"; do
  create_day "workintech/sprint6/$day"
done

# === SPRINT 7 ===
for day in "day01-routing-kavrami" "day02-formlarla-calismak-I" "day03-formlarla-calismak-II" "day04-testlere-giris"; do
  create_day "workintech/sprint7/$day"
done

# === SPRINT 8 (placeholder) ===
for day in "day01-topic01" "day02-topic02" "day03-topic03" "day04-topic04"; do
  create_day "workintech/sprint8/$day"
done

# === SPRINT 9 ===
for day in "day01-react-hook-form-toastify" "day02-tailwindcss-datefns" "day03-custom-hooks-localstorage" "day04-react-testing-library"; do
  create_day "workintech/sprint9/$day"
done

# === SPRINT 10 ===
for day in "day01-immutability-reducer" "day02-redux-state-yonetimi" "day03-middleware-kavrami" "day04-tanstack-query"; do
  create_day "workintech/sprint10/$day"
done

echo "✅ Klasör yapısı oluşturuldu."
