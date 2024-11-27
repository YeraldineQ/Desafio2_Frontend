import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { LocationService } from 'src/app/services/location.service';
import { OpportunitiesService } from 'src/app/services/opportunities.service';
import { DataService } from '../services/data.service';
import { OpportunityModel } from 'src/app/interfaces/opportunity.inteface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  locations: any[] = [];
  instituciones: any[] = [];
  categories: any[] = [];
  opportunities: any[] = [];

  filters = {
    idRegion: null,
    idCategoria: null,
    idInstitucion: null,
  };

  constructor(
    private readonly locationService: LocationService,
    private readonly institucionesService: InstitucionesService,
    private readonly categoryService: CategoryService,
    private readonly opportunitiesService: OpportunitiesService,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loadLocation();
    this.loadInstituciones();
    this.loadCategories();
    this.onFilter();
  }

  loadLocation(): void {
    this.locationService.getLocations().subscribe({
      next: (response: any) => {
        this.locations = response;
      },
      error: (error) => {
        console.error('Error al cargar ubicaciones:', error);
      },
    });
  }

  loadInstituciones(): void {
    this.institucionesService.getInstituciones().subscribe({
      next: (response: any) => {
        this.instituciones = response;
      },
      error: (error) => {
        console.error('Error al cargar instituciones:', error);
      },
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response;
      },
      error: (error) => {
        console.error('Error al cargar Categoría:', error);
      },
    });
  }

  onFilter(): void {
    // Solo enviar filtros si tienen valores válidos
    const filtersToSend = {
      idRegion: Number(this.filters.idRegion),
      idCategoria: Number(this.filters.idCategoria),
      idInstitucion: Number(this.filters.idInstitucion),
    };

    // Verificar si hay algún filtro seleccionado
    const hasFilters = Object.values(filtersToSend).some(
      (value) => value !== 0
    );

    console.log(hasFilters);

    if (!hasFilters) {
      // Si no hay filtros, cargar todas las oportunidades
      this.opportunitiesService.getOpportunities().subscribe({
        next: (response: any) => {
          this.opportunities = response;
          this.dataService.updateData(this.opportunities);
          console.log(this.opportunities);
        },
        error: (error) => {
          console.error('Error al cargar oportunidades:', error);
        },
      });
      return;
    }

    const findData = this.opportunities.map((item: OpportunityModel) => {
      return {
        id: item.id,
        descripcion: item.descripcion,
        tipoOportunidad: item.tipoOportunidad.id,
        estadoOportunidad: item.estadoOportunidad.id,
        informacionOportunidad: item.informacionOportunidad.id,
        categoriaOportinidad: item.categoriaOportinidad.id,
        institucionOportunidad: item.institucionOportunidad[0],
        userOportunidad: item.userOportunidad[0].id,
      };
    });

    console.log(findData);

    const filteredItems = findData.filter((item) =>
        filtersToSend.idRegion === item.institucionOportunidad.idRegion.id &&
        filtersToSend.idCategoria === item.categoriaOportinidad &&
        filtersToSend.idInstitucion === item.institucionOportunidad.id
    );

    console.log(filteredItems);
    this.opportunities = filteredItems;
    this.dataService.updateData(this.opportunities);
  }
}