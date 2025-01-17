
```sh
# Link your project
supabase link --project-ref your-project-ref

supabase push #to sync your schema to development
# or if you are makig change using studio 
supabase db pull
supabase db diff #to generate migrations

```
