
A concept e-commerce store using Angular, .Net Core, SQLite, and Redis.


## Run Locally

Clone the project

```bash
  git clone https://github.com/tmabenge/basic-ecommerce-site.git
```

Add App Identity Migration 

```bash
  Add-Migration InitialCreate -Context AppIdentityDbContext
```

Update Identity Database 

```bash
  update-database -Context AppIdentityDbContext
```

Install Redis

```bash
  https://github.com/microsoftarchive/redis/releases/download/win-3.0.504/Redis-x64-3.0.504.msi
```

Start API Project

```bash
```

Open your browser on

```bash
  https://localhost:5001
```

Login Info

```bash
 U: robin@test.com
 P: Pa$$w0rd
```
