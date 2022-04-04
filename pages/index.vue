<template>
  <main>
    <v-hero
      v-if="hero"
      :title="hero.title"
      :description="hero.description"
      :avatar="hero.avatar"
      :quote="hero.quote"
      :btn_text="hero.btn_text"
      :pdf="hero.pdf"
    />

    <div class="container container-cols">
      <div class="container-cols__main">
        <v-experience
          v-if="homepage.experience"
          :title="homepage.experience_title"
          :experiences="experience"
        />
        <v-competence
          v-if="competences"
          :title="homepage.competence_title"
          :competences="competences"
        ></v-competence>
      </div>
      <v-aside class="container-cols__aside" :content="aside"></v-aside>
    </div>
  </main>
</template>

<script>
import VAside from '@/components/VAside/VAside'
import VHero from '@/components/VHero/VHero'
import VExperience from '@/components/VExperience/VExperience'
import VCompetence from '@/components/VCompetence/VCompetence'

export default {
  name: 'IndexPage',
  components: { VHero, VExperience, VAside, VCompetence },
  async asyncData({ $strapi, $config }) {
    const fetchHomepage = await $strapi.$homepage.find({
      populate: [
        'hero',
        'hero.avatar',
        'hero.pdf_files',
        'experience',
        'competences',
        'training',
        'volunteering',
        'hobbies',
      ],
    })
    const homepage = fetchHomepage.data.attributes

    const hero = {
      title: homepage.hero.title,
      description: homepage.hero.description,
      avatar: {
        src: homepage.hero.avatar.data.attributes.formats.small.url,
        alt: homepage.hero.avatar.data.attributes.alternativeText,
      },
      quote: homepage.hero.quote,
      btn_text: homepage.hero.btn_text,
      pdf: homepage.hero.pdf_files.data.attributes.url,
    }
    const experience = homepage.experience
    const competences = homepage.competences

    const aside = {
      training_title: homepage.training_title,
      trainings: homepage.training,
      volunteering_title: homepage.volunteering_title,
      volunteerings: homepage.volunteering,
      hobbies_title: homepage.hobbies_title,
      hobbies: homepage.hobbies,
    }

    return { homepage, hero, experience, competences, aside }
  },
}
</script>
