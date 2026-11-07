# ZIKRR — The Sacred Islamic Bookstore & Manuscript House (`zikrrthebookstore`)

A full-stack luxury Islamic Bookstore e-commerce application crafted with a **Royal Maroon & Antique Gold** heritage aesthetic, mobile-first responsiveness, 3D illuminated manuscript book covers, and a complete **Admin Backend CMS** (`/admin`) to manage everything from the storefront hero banner to checkout payment gateways and order fulfillment.

---

## Quick Start

```bash
cd C:\Users\aatik\zikrrthebookstore
npm run dev
```

- **Storefront**: [http://localhost:3000](http://localhost:3000)
- **Admin Backend Portal**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Key Features

### 1. Royal Maroon & Gold Storefront (`/`)
- **Dynamic Bismillah & Announcement Bar**: One-click coupon application (`ZIKRR10`).
- **Andalusian Archway Hero Showcase**: Displays the featured collector's volume configured in the backend.
- **3D Illuminated Manuscript Book Covers**: Custom gold-foiled leatherbound cover renderer with Arabic calligraphy titles, spine ridges, gilded page edges, or custom image URLs.
- **Multi-Faceted Search & Filtering**: Filter by Sacred Science Category, Bestsellers, Featured Heritage, New Arrivals, Collector Boxed Sets, Language (`Bilingual Arabic/English`, `English`, `Arabic`), Binding type, and Price/Rating sort.
- **Book Inspection Modal**: Full scholarly overview, complete Table of Contents, ISBN/Binding/Page specs, and live Verified Reader Reviews (with a form to submit new reviews).
- **Interactive Satchel (Cart) & Wishlist Drawers**:
  - Real-time Free Shipping progress bar
  - Royal Maroon Silk Ribbon & Personalized Du'a Card gift-wrapping option
  - Promotional Coupon Codes (`ZIKRR10`, `BARAKAH20`, `SEEKER15`)
- **Multi-Step Sacred Checkout**:
  - Supports **Credit/Debit Card (Stripe Test Mode)**, **UPI / Wallet (Razorpay Test Mode)**, and **Cash on Delivery (COD)**
  - Automatically decrements book stock and generates an official printable receipt with an Order Reference ID (`ZKR-...`)
- **Live Order Tracking Lookup**: Customers can track any order by Order ID (e.g., `ZKR-89421`) or email address.
- **Mobile Responsive**: Includes a dedicated mobile bottom navigation bar and slide-out collection drawer.

### 2. Full Admin Backend CMS (`/admin`)
- **Executive Dashboard**: Revenue analytics, order counts, low-stock alerts, quick status updates, and `+10 Stock` instant replenishment.
- **Books & Catalog Manager**: Full CRUD (Add, Edit, Delete books) with a **Live 3D Leather Cover Preview** as you type Arabic/English titles and switch leather dyes.
- **Sacred Categories Manager**: Create and manage classical disciplines with Arabic calligraphy titles and icons.
- **Orders & Checkout Fulfillment**: Filter orders by status, update `OrderStatus` (`PENDING`, `CONFIRMED`, `PROCESSING`, `SHIPPED`, `DELIVERED`, `CANCELLED`) and `PaymentStatus`, and assign courier tracking numbers.
- **Promotional Coupons Manager**: Create percentage or fixed-discount promo codes, toggle active/paused status, and monitor usage.
- **Reader Reviews Moderation**: Approve, hide, or delete customer book reviews.
- **Storefront & Payment Gateway Settings**: Customize Store Name, Tagline, Announcement Bar, Hero Headlines, Featured Hero Book, Currency symbol, Shipping & Gift Wrap fees, and enable/disable Stripe, Razorpay UPI, or COD checkout options.
