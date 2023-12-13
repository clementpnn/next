"use client"

import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormLabel, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

export const urlSchema = z.object({
  name: z.string().min(1, { message: "Le champ ne doit pas être vide" })
})

export default function RegisterForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    mode: "onSubmit",
    defaultValues: {
      name: ""
    }
  })

  function onSubmit(values: z.infer<typeof urlSchema>) {
    toast({
      title: "Envoyé",
      description: values.name
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-5">
          <Button type="submit" className="ml-5">
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  )
}
