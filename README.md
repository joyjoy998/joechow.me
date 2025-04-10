# Easy to Deploy your First Portfolio Website

## ⚙️ Tech Stacks used in this portfolio project

<ul>
<li>Framework: React + Next.js</li>
<li>Programming Language: TypeScript</li>
<li>Styling: Tailwind CSS + Shadcn UI + Lucide Icons</li>
<li>Icons: Lucide + Tabler</li>
<li>Animation: Framer Motion</li>
<li>HTTP Client: Axios</li>
<li>Database: Supabase</li>
<li>ORM: Prisma</li>
<li>Cache: Redis</li>
<li>CMS: Sanity</li>
<li>Authentication: Clerk</li>
<li>Deployment: Vercel</li>
</ul>

## 💡 Get Started

### Environment

<ul>
<li>Next.js v15.2.1</li>
<li>React v19.0.0</li>
<li>Node.js v20.15.0</li>
</ul>

These versions are only used in this portfolio project, which does not mean that you must strictly follow these specific versions to configure the project.

### Clone the repo

```zsh
git clone https://github.com/joyjoy998/joechow.me.git
```

And then the most convenient way is drag the folder to VS Code, and enter the following command in the terminal.

### Install Dependencies

```zsh
npm install
```

And then npm will download and install all the dependencies listed in your project's package.json file.

### .env file

Create .env file to store sensitive infomation such as API keys, database credentials, and authentication tokens.

```env
# clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

# supabase

DATABASE_URL=

DIRECT_URL=

#sanity

NEXT_PUBLIC_SANITY_PROJECT_ID=

NEXT_PUBLIC_SANITY_DATASET=

# upstash redis

UPSTASH_REDIS_REST_URL=

UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_SITE_URL=''
```

And let's continue to set up all the environment variables accordingly.

#### Clerk

1. Go to [Clerk](https://dashboard.clerk.com/apps/new) and create a new application. You can set your preferred login method.

2. Then go to Configure page and in API keys field copy and paste keys to the .env file.

#### Supabase

1. Go to [Supabase](https://supabase.com/) and create a new project, and you need to remember the database password which will be used in prisma setting.

2. Then click the Connect button at the top left of the page and jump to ORMs and choose the Prisma Tool, here you will find the template .env file like that:

```env
# Connect to Supabase via connection pooling.

DATABASE_URL="postgresql://postgres.ajyqnfusadwqeadfhbach:[YOUR-PASSWORD]@aws-0-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations.

DIRECT_URL="postgresql://postgres.ajyqnfusadwqeadfhbach:[YOUR-PASSWORD]@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres"
```

You must notice that you should convert your db pwd using [percentage-encode special characters](https://www.prisma.io/dataguide/postgresql/short-guides/connection-uris) (You can convert your pwd following the guide)

3. After all set, enter the following command in the terminal:

```zsh
npx prisma db push
```

#### Sanity

1. Go to [Sanity](https://www.sanity.io/), register an account and create a project to get project id and dataset name, put them on .env file, and then you can follow the guide in Getting started.

After you enter the following command in terminal:

```zsh
npm create sanity@latest -- --project [YOUR PROJECTID] --dataset [YOUR DATASET_NAME] --template clean --typescript --output-path [YOUR PROJECT_NAME]
```

2. It will ask you serveral question, in the first question, if you want to quickly set up the environment, please say NO to Would you like to add configuration files for a Sanity project in this Next.js folder? And other questions are depend on you.

3. And then you create the schemaTypes within your sanity studio, put the _"index.ts", "blogType.ts", and "projectType.ts"_(from a folder named sanity) in this folder. If you are confused here, please check the Getting started guide in [sanity website](https://www.sanity.io/) which will solve your questions.

4. After all done, cd your studio, and npm run dev. Now you can add and edit your project and blogs in localhost:3333.

#### Upstash Redis

1.Go to [Upstash Redis](https://console.upstash.com/redis), register an account and create a database.

2. And then within your database, you can find the .env in the Restful API Part after scrolling down the page.

3. Copy them and paste to your .env file.

⚠️ Something may be noticed: I use redis to store my leetcode tracker data, if you also want to achive that, go to /app/api/leetcode/get and replace with your leetcode name.

#### Run the server

Now we can run the portfolio website:

`npm run dev`

Please run it at localhost:3000 if possible. And if you want to use another port, you can re-assign it in /src/lib/apiClient.ts

### 📖 Acknowledgement

I appreciate [cali](https://cali.so) and [Zephyr](https://github.com/eurooooo/zephyrlin.me), who inspired and enabled me to complete my [first portfolio website](https://www.joechow.me/).

Many hours I spent studying their code and design principles taught me more than any tutorial could have, illuminating paths I wouldn't have discovered alone. I offer my deepest and most sincere thanks.
