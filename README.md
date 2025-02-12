# **WhereIsIt - Lost and Found Platform**  
###
<img align="center" src="https://i.ibb.co.com/sC9HdkV/Screenshot-2025-01-05-173641.png"/>

**WhereIsIt** is a full-stack web application designed to connect individuals who have lost personal belongings with those who have found them. The platform provides a seamless way to report, browse, and recover lost and found items.  

---

## **Live Demo**  

[**Visit the Live Website**](https://where-is-it-12d17.web.app/)  

---

## **Features**  

### **Key Features:**  

- **User Authentication:**  
  - Email/password-based registration and login.  
  - Google authentication.  
  - Secured using JWT tokens for private routes.  

- **Lost & Found Item Management:**  
  - Add lost or found items with detailed information.  
  - Update or delete user-added items.  
  - View all user-specific items.  

- **Recovered Items Tracking:**  
  - Track items marked as "recovered."  
  - Submit recovery details with date and location.  

- **Search & Filter:**  
  - Search items by title or location.  

- **Responsive Design:**  
  - Optimized for mobile, tablet, and desktop devices.  

- **Dynamic Layouts:**  
  - Toggle between card and table layouts for recovered items.  

### **Additional Features:**  

- Interactive modals for actions like updates and recovery.  
- Dynamic page titles for better navigation.  
- SweetAlert and toast notifications for CRUD operations.  
- User-friendly 404 error page and loading spinners.  

---

## **Pages**  

- **Home:**  
  Banner, latest lost and found items, and additional informative sections.  

- **Lost & Found Items:**  
  Browse all lost and found items.  

- **Add Lost/Found Item:**  
  Submit new posts.  

   **Category**  
  Search all lost and found item by their category.

   **Contact Us:**  
  User can contact us by email.  

- **Item Details:**  
  View detailed information and mark items as recovered (private route).  

- **Manage My Items:**  
  Manage all user-specific posts with update and delete options (private route).  

- **All Recovered Items:**  
  View recovered items in both table and card formats (private route).  

---

## **Technologies Used**  

### **Client Side:**  
- **Framework:** React.js  
- **Styling:** TailwindCSS, DaisyUI, Framer Motion  
- **Authentication:** Firebase  
- **Routing:** React Router DOM  
- **Notifications:** SweetAlert, Toastify  

### **Server Side:**  
- **Framework:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Environment Variables:** dotenv  

---

## **Deployment**  

- **Client:** Deployed on Vercel  
- **Server:** Deployed on Render  
- **Database:** MongoDB Atlas  

---

