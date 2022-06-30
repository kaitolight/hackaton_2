<?php

namespace App\DataFixtures;

use App\Entity\Agency;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AgencyFixtures extends Fixture
{
    public const AGENCIES = [
        ['name' => 'Nice', 'mail' => 'contact@upside-nice.com'],
        ['name' => 'Paris', 'mail' => 'contact@upside-paris.com'],
        ['name' => 'Bordeaux', 'mail' => 'contact@upside-bordeaux.com'],
        ['name' => 'Tours', 'mail' => 'contact@upside-tours.com'],
        ['name' => 'Strasbourg', 'mail' => 'contact@upside-strasbourg.com'],
        ['name' => 'Toulouse', 'mail' => 'contact@upside-toulouse.com'],
        ['name' => 'Brest', 'mail' => 'contact@upside-brest.com'],
    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::AGENCIES as $agencyName) {
            $agency = new Agency();
            $agency->setName($agencyName['name']);
            $agency->setMail($agencyName['mail']);
            $manager->persist($agency);
            $this->addReference('agency_' . $agencyName['name'], $agency);
        }
        $manager->flush();
    }
}
