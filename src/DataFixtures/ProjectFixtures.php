<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use App\Entity\Project;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;


class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
    public const PROJECTS = [
        ['name' => 'Conseil en organisation dans l\'assurance',
        'description' => 'Le Comité de Direction se trouve dans une situation complexe, et fait le constat de difficultés entre ses membres. Le CODIR ne parvient pas à prendre sereinement et efficacement de décisions : les changements opérationnels ne peuvent donc être mis en œuvre.',
        'created_at' => '2022-06-10',
        'ended_at' => '2022-07-10',
        'status' => true,
        'category' => 'category_Conseil',
        'agency' => 'agency_Bordeaux',
        'user' => 'user_JF'
        ],

        ['name' => 'La conception UX pour application desktop',
        'description' => 'Le besoin de notre client, évoluant dans un contexte projet agile, est d’intégrer toutes les parties-prenantes dès la phase de conception de l’application. En intégrant un UX designer, celui-ci a pour rôle de couvrir à la fois la partie fonctionnelle mais également d’assurer une conception centrée sur les besoins des utilisateurs finaux.',
        'created_at' => '2022-05-20',
        'ended_at' => '2022-06-10',
        'status' => false,
        'category' => 'category_Infrastructure',
        'agency' => 'agency_Nice',
        'user' => 'user_Antho'
        ],

        ['name' => 'Task Force de traitement de masse pour S2E',
        'description' => 'Elle doit faire face à une évolution de la loi qui va lui générer un flux de dossiers très important à court terme, pour une durée maximum de 2 ans,',
        'created_at' => '2022-07-13',
        'ended_at' => '2022-07-13',
        'status' => true,
        'category' => 'category_Academy',
        'agency' => 'agency_Paris',
        'user' => 'user_Loris'
        ],

        ['name' => 'Transformation d’un centre de préparation pour Système U',
        'description' => 'U-IRIS assure la gestion de tout l’informatique du groupement U, tant au niveau logiciel que matériel.',
        'created_at' => '2022-08-10',
        'ended_at' => '2022-08-10',
        'status' => true,
        'category' => 'category_Ingénierie des Systèmes',
        'agency' => 'agency_Strasbourg',
        'user' => 'user_Julien'
        ],

        ['name' => 'Le conseil et l’expertise dans le domaine des tests et de la qualité logicielle',
        'description' => 'La mission des équipes d’Apside consiste à mettre en œuvre des méthodes et des solutions pour tester les applications que la DSN met à disposition de ses usagers internes ou externes',
        'created_at' => '2022-09-10',
        'ended_at' => '2022-09-10',
        'status' => true,
        'category' => 'category_Ingénierie Industrielle',
        'agency' => 'agency_Brest',
        'user' => 'user_JF'
        ],
    ];


    public function load(ObjectManager $manager): void
    {
        foreach (self::PROJECTS as $projectName) {
            $project = new Project();
            $project->setName($projectName['name']);
            $project->setDescription($projectName['description']);
            $project->setCreatedAt(new DateTime($projectName['created_at']));
            $project->setEndedAt(new DateTime($projectName['ended_at']));
            $project->setStatus($projectName['status']);
            $project->setCategory($this->getReference($projectName['category']));
            $project->setAgency($this->getReference($projectName['agency']));
            $project->setUser($this->getReference($projectName['user']));
            // $project->setUser($this->getReference('user_' . rand(1,2)));
            // $project->setUser($projectName['user']);
            // $project->setUser($this->getReference(self::PROJECTS[rand(1, count(self::PROJECTS) -1)]['user']));
            $manager->persist($project);
            $this->addReference('project_' . $projectName['name'], $project);
        }
        $manager->flush();
    }


    public function getDependencies()
    {
        // Tu retournes ici toutes les classes de fixtures dont ProgramFixtures dépend
        return [
        CategoryFixtures::class,
        AgencyFixtures::class,
        UserFixtures::class
        ];
    }
}
